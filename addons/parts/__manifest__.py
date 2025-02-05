# -*- coding: utf-8 -*-

{
    'name': 'Parts',
    'version': '1.2',
    'description': "Ce module permet la creation de nouvelles pieces avec differentes options",
    'author': 'Soufiane Amini / Abdelmoghit Merzouki Idrissi',
    'depends': [
        'base',
        'web'
    ],
    'assets': {
        'web.assets_backend': [
            'parts/static/src/js/main.js',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
    'data': [
        'security/ir.model.access.csv',

        'views/views.xml'
    ]
}
