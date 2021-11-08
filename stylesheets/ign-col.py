import os
import sys

files = os.listdir(path='.')

for file in files:
    if file.endswith('.css'):
        with open(file) as f_read:
            with open('./ignore-color/'+file, mode='w') as f_write:
                for line in f_read:
                    line = line.rstrip()
                    if ('#' in line):
                        chars = list(line)
                        filled_line = ''
                        for char in chars:
                            if char !=' ':
                                filled_line += char
                        chars = list(filled_line)
                        if len(chars) == 0:
                            f_write.write('\n')
                        elif chars[0] == '#':
                            f_write.write(line+'\n')
                        else :
                            f_write.write('/* '+line+' */\n')
                    else:
                        f_write.write(line+'\n')