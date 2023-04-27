//Acrescentado fetch e dependência paga que seja possível carregar os dados no servidor.
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.valuesOportunidades = async () => {
    const phaseoportunidadesId = "310751590"

    try{
        const cards = await fetch(
            "https://api.pipefy.com/graphql",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDIxNTk5NTQsImVtYWlsIjoiZGFuaWVsLmltcHVsc2ViQGdtYWlsLmNvbSIsImFwcGxpY2F0aW9uIjozMDAyMTcyNTB9fQ.OPT1Bn55gTEq7IMaJdTkdYuGf5vufNlnDKXYGzsnYEXz4Ny1zB6mXQZN5at4EpPbCH_THZXMoAcsyS1eDvOHwA",
                },
                body: JSON.stringify({
                "query": `{ phase ( id: ${phaseoportunidadesId}) {cards_count}}`,
                }),
            }
        )

        const dadosCards = await cards.json()
        //const allCards = dadosCards.data.phase.cards.edges
        const quantidadeDeClientes = dadosCards.data.phase.cards_count
    
        /* const valoresPropostaImplementacao =[]
        const valoresPropostaRecorrencia = []

        allCards.map((obj) => {
            obj.node.fields.map((object)=>{
                if(object.name === "Valor da implementação"){
                    valoresPropostaImplementacao.push(object.value)
                } if(object.name === "Valor recorrente da proposta"){
                    valoresPropostaRecorrencia.push(object.value)
                }
            })
        })
        
        const somaPropostaImplementacao = valoresPropostaImplementacao.reduce((acumulador, valorAtual) => {
            const numero = Number(valorAtual.replace(".", "").replace(",", "."));
            return acumulador + numero
        }, 0)

        const somaPropostaRecorrencia = valoresPropostaRecorrencia.reduce((acumulador, valorAtual) => {
            const numero = Number(valorAtual.replace(".", "").replace(",", "."));
            return acumulador + numero
        }, 0) */
        
        return {
            //valorImplementacao: somaPropostaImplementacao,
            //valorRecorrencia: somaPropostaRecorrencia,
            quantidadeDeClientes: quantidadeDeClientes
        }


    } catch (err){
        console.log(err)
    }
}

//valuesOportunidades()
