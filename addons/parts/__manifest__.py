# -*- coding: utf-8 -*-

{
    'name': 'Gestion Commandes',
    'version': '1.2',
    'description': "",
    'author': 'Soufiane Amini / Abdelmoghit Merzouki Idrissi',
    'depends': [
        'base',
        'web'
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'data': [
        'security/ir.model.access.csv',

        'views/views.xml'
    ]
}
