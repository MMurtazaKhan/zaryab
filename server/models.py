from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin


db = SQLAlchemy()


class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    serialize_rules = ('-checkout_carts',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    brand = db.Column(db.String)
    price = db.Column(db.Float)
    image = db.Column(db.String)
    description = db.Column(db.String)

    checkout_carts = db.relationship(
        "CheckoutCart", backref='product', cascade='all, delete, delete-orphan')
    customers = association_proxy('checkout_carts', 'customer')

    customer_products = db.relationship(
        "CustomerProduct", backref='product', cascade='all, delete, delete-orphan')


class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'

    serialize_rules = ('-password', "-created_at",
                       "-updated_at", '-checkout_carts',)

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String, nullable=False)
    lastname = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    email = db.Column(db.Integer, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    checkout_carts = db.relationship(
        "CheckoutCart", backref='customer', cascade='all, delete, delete-orphan')
    products = association_proxy('checkout_carts', 'product')

    customer_products = db.relationship(
        "CustomerProduct", backref='customer', cascade='all, delete, delete-orphan')

    @validates('firstname', 'lastname', 'address', 'phone', 'password')
    def validate_nullable(self, key, value):
        if not value:
            raise ValueError(f'{key} is required')
        return value

    @validates('email')
    def validate_email(self, key, value):
        emails = Customer.query.all()
        if value in emails:
            raise ValueError('email already exists')
        if not value:
            raise ValueError('email is required')
        return value


class CheckoutCart(db.Model, SerializerMixin):
    __tablename__ = 'checkout_carts'

    # serialize_rules = ( '-customer_id', '-checkout_date')

    id = db.Column(db.Integer, primary_key=True)
    checkout_date = db.Column(db.DateTime, server_default=db.func.now())
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))


class CustomerProduct(db.Model, SerializerMixin):
    __tablename__ = 'customer_products'

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))


class PurchaseHistory(db.Model, SerializerMixin):
    __tablename__ = 'purchase_histories'

    id = db.Column(db.Integer, primary_key=True)
    purchase_date = db.Column(db.DateTime, server_default=db.func.now())
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))


# purchase_history_query = db.session.query(PurchaseHistory)
