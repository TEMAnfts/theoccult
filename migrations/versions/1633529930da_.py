"""empty message

Revision ID: 1633529930da
Revises: 7c9c726d81a0
Create Date: 2024-02-23 21:21:36.823416

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = '1633529930da'
down_revision = '7c9c726d81a0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('forms',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('wallet_address', sa.String(length=40), nullable=False),
    sa.Column('last_nft', sa.String(length=20), nullable=True),
    sa.Column('why', sa.String(length=250), nullable=True),
    sa.Column('twitter', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('wallet_address')
    )
    # ### end Alembic commands ###
    if environment == "production":
        op.execute(f"ALTER TABLE forms SET SCHEMA {SCHEMA};")


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('forms')
    # ### end Alembic commands ###
