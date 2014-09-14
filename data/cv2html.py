#!/usr/bin/env python
# coding=utf-8

from string import Template
from ujson import loads

data = loads(open("cv.json", "r").read())
cv = {
    'data': data,
    'template': Template(open("templates/cv.tpl", "r").read()),
    'render': ""
}
projects = {
    'data': data['projects'],
    'template': Template(open("templates/cv.project.tpl", "r").read()),
    'render': ""
}
degrees  = {
    'data': data['degrees'], 
    'template': Template(open("templates/cv.degree.tpl", "r").read()), 
    'render': ""
}

degrees['render'] = (''.join(['<ul>'] + [degrees['template']
    .substitute(year=d['year'], title=d['title'], 
        subtitle=d['subtitle'], location=d['location']) 
    for d in degrees['data']] + ['</ul>']))

projects['render'] = (''.join([projects['template'].substitute() 
    for p in projects['data']]))

cv['render'] = cv['template'].substitute(firstname=cv['data']['firstname'], 
        lastname=cv['data']['lastname'], degrees=degrees['render'],
        projects=projects['render'])

print(cv['render'])

