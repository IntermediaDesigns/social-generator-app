from app import app, db
from models.user import User


def init_db():
    with app.app_context():
        # Create all tables
        db.create_all()

        # Optionally, add initial data
        # For example, create an admin user
        if User.query.filter_by(username="admin").first() is None:
            admin = User(username="admin", email="intermediadesignsllc@gmail.com")
            admin.set_password("Social0945!@1323")
            db.session.add(admin)
            db.session.commit()

        print("Database initialized!")


if __name__ == "__main__":
    init_db()
