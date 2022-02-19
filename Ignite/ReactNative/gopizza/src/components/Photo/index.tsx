import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageProfile, PlaceHolder, PlaceHolderTitle } from './styles'

type Props={
    uri: string | null
}

const Photo = ({uri} : Props) => {
    if(uri){
        return <ImageProfile source={{uri: uri}}/>
    }
    return(
        <PlaceHolder>
            <PlaceHolderTitle>Nenhuma foto{'\n'} carregada</PlaceHolderTitle>
        </PlaceHolder>
    )
}
export default Photo;