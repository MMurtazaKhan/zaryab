from app import app
from models import db, Product, Customer, CheckoutCart, PurchaseHistory
# , PurchaseHistory
from faker import Faker
import random

faker = Faker()


with app.app_context():

    Customer.query.delete()
    CheckoutCart.query.delete()
    Product.query.delete()

##### CUSTOMERS#####
    franco = Customer(firstname='Franco', lastname="Lepe", email="clearviewworldseo@gmail.com",
                      phone=4444444444, address='123 main street', password="password")
    for i in range(5):
        customer = Customer(
            firstname=faker.first_name(),
            lastname=faker.last_name(),
            email=faker.email(),
            phone=random.randint(1000000000, 9999999999),
            address='1234 happy street',
            password='password'
        )

        db.session.add(franco)
        db.session.add(customer)
        db.session.commit()


###### products####
    product1 = Product(name='Les Paul', brand='Gibson', price=2799.99, description='Les Paul Standard 60s neck, Gold Top.',
                       image='https://images.squarespace-cdn.com/content/v1/54132a28e4b030d3be2f32eb/1670269168382-VWBIIB1GCMF92UGM9IT5/836218D1-F30D-49DD-8919-AEAF0E2A744B.jpeg?format=1000w')
    product2 = Product(name='SG', brand='Gibson', price=1599.99, description='SG Standard, Heritage Cherry',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjPJxRn4c7bI2gEi4rnsADzOT6LXDReHNwwEepG2EsPX1TUpQmsHG6kvYKttvB_8NhlM&usqp=CAU')
    product3 = Product(name='Custom 24', brand='PRS', price=4050.00, description='Custom 24 with Pattern Thin Neck, Eriza Verde',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeRpd8JXEa4XKvEmZf2uC8xWiAUcHu767Pg&usqp=CAU')
    product4 = Product(name='OR100', brand='Orange', price=2349.00, description='Orange OR100H - 100-Watt Tube Head',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehFCkBOelsymdq_6XB_gGz1WsKcyMNg0gsQ&usqp=CAU')
    product5 = Product(name='JCM 900', brand='Marshall', price=2999.99, description='100 Watt, Guitar Tube amp head',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjxnTn6FSQQahp-cEtWr8ldNYHrmprLZJmQoTsrkGwpI2y9NDm2No8hf2FX9zl7-yrYE&usqp=CAU')
    product6 = Product(name='Centennial Zep 4-Piece', brand='Ludwig', price=1999.99, description='4-Piece Acustic Drum Set',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmXr3c2khzJBc6f1lUTWlzkS-LpckpEpsog&usqp=CAU')
    product7 = Product(name='Telecaster', brand='Fender', price=1799.99, description='Telecaster Maple Fingerboard, Butterscotch Blonde',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1ZFra5h5p43I-7Iyy3dRYIdk_cBh8o_usw&usqp=CAU')
    product8 = Product(name='SM57', brand='Sure', price=99.99, description='Cardioid Dynamic Instrument Microphone',
                       image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnibIwHxO0IEVoW_DYMKjCWTRV8ttsS5BLzg&usqp=CAU')
    product9 = Product(name='U57', brand='Neumann', price=3295.00, description='neumann u 87 ai large-diaphragm condenser microphone,nickel',
                       image='https://m.kitmonsters.com/05127-0470-u87ai.large.jpg')
    product10 = Product(name='American Professional II Precision Bass', brand='Fender', price=1749.00, description='3-color Sunburst with Rosewood Fingerboard',
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Yl6dK-EQi4prcmAfXhoU6acnb3joU5UWSg&usqp=CAU')
    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.commit()

# checkoutcart

    checkout_cart = CheckoutCart(product_id=1, customer_id=2)
    db.session.add(checkout_cart)
    db.session.commit()


# purchase history

    purchase_history = PurchaseHistory(product_id=1, customer_id=7)
    db.session.add(purchase_history)
    db.session.commit()
