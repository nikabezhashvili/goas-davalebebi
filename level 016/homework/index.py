# 1
def create_array(n):
    res=[]
    i=1
    while i<=n:
        res.append(i)
        i += 1
    return res
# 2
def remove_smallest(a):
    b = a[:]
    if b:
        b.remove(min(b))
    return b
# 3
def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f'{names[0]} likes this'
    elif len(names) == 2:
        return f'{names[0]} and {names[1]} like this'
    elif len(names) == 3:
        return f'{names[0]}, {names[1]} and {names[2]} like this'
    else:
        return f'{names[0]}, {names[1]} and {len(names) - 2} others like this'
# 4
def count_by(x, n):
    a = []
    i = 1
    while i <= n:
        b = x * i
        a.append(b)
        i += 1
    return a
# 5
def between(a,b):
    c = []
    for i in range(a,b+1):
        c.append(i)
    return c