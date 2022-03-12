import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  signin: (email: string, password: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const USER_COLLECTION = "@GOPIZZA:USERS";

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    LoadUserData();
  }, []);

  async function LoadUserData() {
    setIsLogging(true);
    const storageUser = await AsyncStorage.getItem(USER_COLLECTION);
    if (storageUser) {
      const userData = JSON.parse(storageUser) as User;
      setUser(userData);
      console.log(userData);
    }
    setIsLogging(false);
  }

  async function signin(email: string, password: string) {
    if (!email || !password) {
      return Alert.alert("Login", "Informe o e-mail e a senha");
    }
    console.log("true");
    setIsLogging(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        firestore()
          .collection("users")
          .doc(account.user.uid)
          .get()
          .then(async (profile) => {
            const { name, isAdmin } = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin,
              };
              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userData)
              );
              setUser(userData);
              console.log(userData);
            }
          })
          .catch(() => {
            return Alert.alert("Login", "Não foi possivel buscar os dados!");
          });
      })
      .catch((err) => {
        const { code } = err;
        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          return Alert.alert("Login", "E-mail ou senha inválida");
        } else {
          console.log(err);
          return Alert.alert("Login", "Não foi possível realizar o login");
        }
      })
      .finally(() => setIsLogging(false));
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  async function forgotPassword(email: string) {
    if (!email) {
      Alert.alert("Redefinir senha", "Informe o e-mail!");
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          "Redefinir senha",
          "Enviamos um link no seu e-mail para redefinir sua senha"
        )
      )
      .catch((err) =>
        Alert.alert(
          "Redefinir senha",
          "Não foi possível enviar o e-mail parada redefinição!"
        )
      );
  }

  return (
    <AuthContext.Provider
      value={{
        signin,
        isLogging,
        user,
        signOut,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
