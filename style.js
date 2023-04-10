import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container:{
        width: '1oo%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        padding: 10,
        margin: 3
    },
    viewimg:{
        width: '32%',
        height: 154,
        padding: 10,
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:  20
        
    },
    viewdata:{
        width: '70%',
        height: '100%',
        backgroundColor: 'gray',
        pading: 10,
        borderRadius: 20
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5
    },
    descricao:{
        fontSize: 16,
        color: 'white',
        marginBottom: 5
    },
     btn:{
       padding: 10,
       
     },    


});

export default styles;