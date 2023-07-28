const express = require('express');
const app = express();
const port = 3000;

app.use('/css', express.static('public/assets/css'));
app.use('/js', express.static('public/assets/js'));
app.use('/img', express.static('public/assets/img'));

app.get('/index',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/entrar',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Entrar.html')
})
app.get('/contato',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Contato.html')
})
app.get('/equipe',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Equipe.html')
})
app.get('/sobre',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/sobre.html')
})
app.get('/consultar',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/consultar.html')
})
app.get('/login',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/login.html')
})

//Rotas para as noticias

app.get('/principal',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/Principal.html')
})
app.get('/sub',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/sub.html')
})
app.get('/sub2',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/sub2.html')
})
app.get('/noticia',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia.html')
})
app.get('/noticia2',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia2.html')
})
app.get('/noticia3',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia3.html')
})
app.get('/noticia4',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia4.html')
})
app.get('/noticia5',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia5.html')
})
app.get('/noticia6',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia6.html')
})
app.get('/noticia7',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia7.html')
})
app.get('/noticia8',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia8.html')
})
app.get('/noticia9',function(req,res){
    //__dirname retorna o diretorio raiz da aplicação. Aqui estamos pegando o caminho raiz mais o caminho de onde está o html
    res.sendFile(__dirname+'/public/Noticias/noticia9.html')
})


// para reconhecer os dados recebidos como sendo um objeto no formato JSON
app.use(express.json());

// Arquivo com rotas do cadastro de pessoas
const pessoas = require('./controllers/pessoas');
const produtos = require('./controllers/produtos');

// identificação da rota e da const (require) associada
app.use('/pessoas', pessoas);
app.use('/produtos', produtos);

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});

