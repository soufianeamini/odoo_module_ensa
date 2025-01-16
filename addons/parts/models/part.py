from odoo import api, fields, models


class PartModel(models.Model):
    _name = "part_model"
    _description = "This table gathers all the possible customizations of a part"

    name = fields.Char(required=True)
    color = fields.Char(
        required=False, compute="_compute_color", help="Couleur appliquee sur la piece"
    )
    r = fields.Integer(required=True, help="Valeur du rouge")
    g = fields.Integer(required=True, help="Valeur du vert")
    b = fields.Integer(required=True, help="Valeur du bleu")

    _sql_constraints = [
        (
            "check_rgb",
            "CHECK(r >= 0 AND r <= 255 AND g >= 0 AND g <= 255 AND b >= 0 AND b <= 255)",
            "Les valeurs de red, green et blue doivent etre comprises entre 0 et 255",
        )
    ]

    def _to_hex(self, value) -> str:
        return chr(55 + value) if value > 9 else str(value)

    @api.depends("r", "color")
    @api.depends("g", "color")
    @api.depends("b", "color")
    def _compute_color(self):
        for group in self:
            x = self._to_hex(group.r // 16)
            x1 = self._to_hex(group.r % 16)
            y = self._to_hex(group.g // 16)
            y1 = self._to_hex(group.g % 16)
            z = self._to_hex(group.b // 16)
            z1 = self._to_hex(group.b % 16)
            group.color = "#%s%s%s%s%s%s" % (x, x1, y, y1, z, z1)
