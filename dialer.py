#!/usr/bin/env python3
import sys
import asterisk.agi

agi = asterisk.agi.AGI()

# Exemplo básico de discagem
phone_number = agi.get_variable('PHONE_NUMBER')
agi.exec_command('Dial', f'SIP/{phone_number}')
