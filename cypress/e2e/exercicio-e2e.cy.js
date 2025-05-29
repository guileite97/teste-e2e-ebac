/// <reference types="cypress" />
import paginaProdutos from "../support/page_objects/pagina-produtos";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    let qtd = 0
    cy.fixture('produtos').then(dados => {
        paginaProdutos.escolherProduto([qtd])
        paginaProdutos.addProdutoCarrinho(
            dados[qtd].cor,
            dados[qtd].tamanho,
            dados[qtd].quantidade)
    })
    cy.get('.woocommerce-message').should('contain', ' foram adicionados no seu carrinho.')
    
    
      
  });


})