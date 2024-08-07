"""include datetime in laptimes

Revision ID: d3f04d026fc0
Revises: d9b229dbb945
Create Date: 2024-07-11 09:39:21.242236

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd3f04d026fc0'
down_revision = 'd9b229dbb945'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('laptimes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date_created', sa.DateTime(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('laptimes', schema=None) as batch_op:
        batch_op.drop_column('date_created')

    # ### end Alembic commands ###
