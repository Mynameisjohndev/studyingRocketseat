import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { longPressGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/LongPressGestureHandler';

type User = {
    id: string;
    name: string;
    isAdmin: boolean;
}

type AuthContextData = {
    signin: (email: string, password: string) => Promise<void>;
    isLogging: boolean;
    user: User | null;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode
}

const USER_COLLECTION = "@GOPIZZA:USERS" 

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [isLogging, setIsLogging] = useState(false);
    const [user,setUser] = useState< User | null>(null);

    useEffect(()=>{
        LoadUserData();
    },[])

    async function LoadUserData(){
        setIsLogging(true);
        const storageUser = await AsyncStorage.getItem(USER_COLLECTION);
        if(storageUser){
            const userData = JSON.parse(storageUser) as User;
            setUser(userData);
            console.log(userData);
        }
        setIsLogging(false);
    }

    async function signin(email: string, password: string) {
        if (!email || !password) {
            return Alert.alert("Login", "Informe o e-mail e a senha")
        }
        setIsLogging(true);
        auth().signInWithEmailAndPassword(email, password)
            .then(account => {
                firestore()
                .collection('users')
                .doc(account.user.uid)
                .get()
                .then(async profile => {
                    const {name, isAdmin} = profile.data() as User;

                    if(profile.exists){
                        const userData = {
                            id: account.user.uid,
                            name,
                            isAdmin
                        };
                        await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));
                        setUser(userData);
                    }
                })
                .catch(() => {return Alert.alert("Login", "Não foi possivel buscar os dados!")})
            })
            .catch(err => {
                const {code} = err;
                if(code === "auth/user-not-found" || code === "auth/wrong-password"){
                    return Alert.alert("Login", "E-mail ou senha inválida")
                }else{
                    return Alert.alert("Login", "Não foi possível realizar o login")
                }
            })
            .finally(() => setIsLogging(false));
    }

    async function signOut(){
        await auth().signOut();
        await AsyncStorage.removeItem(USER_COLLECTION);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signin, isLogging, user, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };