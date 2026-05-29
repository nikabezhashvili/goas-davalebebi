# 1
def scramble(s1, s2):
    a = {}
    for i in s1:
        if i in a:
            a[i] += 1
        else:
            a[i] = 1

    for i in s2:
        if i not in a or a[i] == 0:
            return False
        a[i] -= 1

    return True
# 2
def cakes(a, b):
    c = []
    
    for i in a:
        d = a[i]
        if i in b:
            e = b[i]
        else:
            e = 0
        f = e // d
        c.append(f)
    
    return min(c)
# 3
def pig_it(text):
    a = []
    text = text.split(' ')
    for i in text:
        if i.isalpha():
            a.append(i[1:] + i[0] + "ay")
        else:
            a.append(i)
    return ' '.join(a)
# 4
def rgb(r, g, b):
    r = max(0, min(255, r))
    g = max(0, min(255, g))
    b = max(0, min(255, b))
    
    return f"{r:02X}{g:02X}{b:02X}"
# 5
def ips_between(start, end):
    a = start.split(".")
    b = end.split(".")

    c = []
    for i in a:
        c.append(int(i))

    e = []
    for i in b:
        e.append(int(i))

    d1 = c[0]*256**3 + c[1]*256**2 + c[2]*256 + c[3]
    d2   = e[0]*256**3 + e[1]*256**2 + e[2]*256 + e[3]
    
    return d2 - d1