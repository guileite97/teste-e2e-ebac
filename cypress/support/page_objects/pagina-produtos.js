class paginaProdutos {

    escolherProduto(posicao){
        cy.get('.product-block').eq(posicao).click()
    }
    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        
    }
    formulario(dados){
        cy.get('#billing_first_name').type('Guilherme')
        cy.get('#billing_last_name').type('Leite')
        cy.get('#billing_postcode').type('04029100')
        cy.get('#billing_company').type('Ebac')
        cy.get('#billing_address_1').type('Avenida ibirapuera, 2033')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#billing_phone').type('11912345678')
        cy.get('#billing_email').type('teste1@ebac.com')
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new paginaProdutos()