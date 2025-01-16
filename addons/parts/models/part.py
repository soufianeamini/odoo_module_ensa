from odoo import fields, models


class PartModel(models.Model):
    _name = "part_model"
    _description = "This table gathers all the possible customizations of a part"

    name = fields.Char(required=True)
    color = fields.Char(required=True, help="Couleur appliquee sur la piece")
    r = fields.Integer(required=True, help="Valeur du rouge")
    g = fields.Integer(required=True, help="Valeur du vert")
    b = fields.Integer(required=True, help="Valeur du bleu")
