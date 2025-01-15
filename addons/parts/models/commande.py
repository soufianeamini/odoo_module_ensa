from odoo import fields, models

class GestionCommandes(models.Model):
    _name = "commande_model"
    _description = "Gestion des commandes"

    name = fields.Char(required=True)
    total = fields.Float(string='Total', required=True)
