

class Produto{
    //funcao construtora denytro do projeto
    constructor(){
        this.id = 1;//dentro desta classe vai ter um atributo id
        this.arrayProdutos = [];
    }

    //definindo todos os metodos
    salvar(){
        
        let produto = this.lerDados();// vai receber os dados do campo 
        
        if(this.validaCampos(produto)){
            alert('salvo')
        }
        

        console.log(produto); 

    }

    lerDados(){
        let produto = {}//quando coloca chabves se trata de um obj
        
        produto.id =  this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;
        
        return produto;
    }

    validaCampos(produto){
        let msg = ''; 

        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do produto \n';
        }
        if(produto.preco == ''){
            msg += 'Informe o preco do produto \n'
        }

        if(msg !=''){
            alert(msg);
            return false
        }
        return true

    }

    cancelar(){

        alert('item deletado');
    }

}
var produto = new Produto();//criou um objeto do tipo produto


