it('Успешная покупка товаров', function () {
    cy.visit('https://test.qa.studio/');
    cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('#cart-modal > .off-modal-layer').click();
    cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
    cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.checkout').click();

    cy.get('#billing_first_name').type('Роман');
    cy.get('#billing_last_name').type('Чебукин');
    cy.get('#billing_address_1').type('ул.Кирова, д.8к2');
    cy.get('#billing_city').type('г.Москва');
    cy.get('#billing_state').type('Юго-западный р-н');
    cy.get('#billing_postcode').type('143005');
    cy.get('#billing_phone').type('+79855535212');
    cy.get('#billing_email').type('r.chebukin@yandex.ru');
    cy.get('#place_order').click();

    cy.contains('Оформение заказа').should('be.visible');
    })