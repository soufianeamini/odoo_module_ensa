# -*- coding: utf-8 -*-

{
    'name': 'Parts',
    'version': '1.2',
    'description': "",
    'depends': [
        'base',
        'web'
    ],
    'installable': True,
    'application': True,
    'auto_install': False,
    'data': [
        'security/ir.model.access.csv',

        'views/part_views.xml',
        'views/part_menus.xml'
    ]
}
