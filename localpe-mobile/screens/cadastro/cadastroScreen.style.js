import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textoMenor: {
        marginBottom: '2px',
        fontSize: '12px',
        fontWeight: '500',
        color: '#8898AA',
        alignSelf: 'center'
    },
    googleButton: {
        width: '40%',
        padding: '15px',
        backgroundColor: 'fff',
        shadowColor: '#32325d26',
        shadowOffset: {
            width: 5,
            height: 8
        },
        shadowOpacity: 1.50,
        shadowRadius: 16.00,
        elevation: 10,
        height: '35px',
        fontSize: '20px',
        marginTop: '5px',
        marginBottom: '20px',
        borderRadius: '5px',
        alignSelf: 'center'
    },
    loginText: {
        marginTop: '10px',
        fontSize: '36px',
        fontWeight: '600',
        color: '#EA4335',
        alignSelf: 'center'
    },
    boxInputs: {
        marginTop: '20px',
        borderRadius: '8px',
        marginHorizontal: '20px',
        padding: '20px',
        backgroundColor: 'fff',
        shadowColor: '#32325d26',
        shadowOffset: {
            width: 5,
            height: 8
        },
        shadowOpacity: 1.50,
        shadowRadius: 16.00,
        elevation: 10

    },
    button: {
        width: '40%',
        padding: '15px',
        backgroundColor: '#EA4335',
        height: '35px',
        fontSize: '20px',
        marginTop: '20px',
        borderRadius: '5px',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f5f7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        marginTop: 5,
        width: 90,
        color: 'white',
        fontSize: 22,
        fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
    },
    textoBotaoLogin: {
        color: '#000',

    },
    botaoLogin: {
        marginRight: 5,
        borderRadius: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textoBotaoCadastrar: {
        color: 'white',
        borderColor: '#fff'
    },
    botaoCadastrar: {
        marginRight: 5,
        borderRadius: 2,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EA4335',
        borderBottomColor: '#fff'
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        height: '50%',
        flex: 1,
    },
    imagem: {
        height: '25%'
    },
    inputLogin: {
        outline: '0',
        width: '100%'

    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 30,
        paddingLeft: 10,
        borderRadius: '2%',
        left: 83,
        top: 210,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10
    },
    card: {
        position: 'absolute',
        left: 6,
        top: 260,
        width: 400
    }
});

export default styles;
