from odoo import fields, models # type: ignore

class PartModel(models.Model):
    _name = "part_model"
    _description = "This table gathers all the possible customizations of a part"

    name = fields.Char(required=True)
    color = fields.Char(required=True, help="Couleur appliquee sur la piece")
    image = fields.Selection([
        ("hood", "Hood"),
        ("wheel", "Wheel"),
        ("spoiler", "Spoiler"),
        ("chassis", "Chassis")
    ])
