# 1
def add_length(a):
    b = a.split(' ')
    c = []
    for i in b:
        d = len(i)
        e = f'{i} {str(d)}'
        c.append(e)
    return c

# 2
def invert(lst):
    if len(lst) == 0:
        return []
    a = []
    for i in lst:
        a.append(-i)
    return a

# 3
def divisible_by(a, b):
    c = []
    for i in a:
        if i % b == 0:
            c.append(i)
    return c

# 4
def square_sum(a):
    b = 0
    for i in a:
        b += i**2
    return b
# 5
def positive_sum(arr):
    a = 0
    for i in arr:
        if i > 0:
            a += i
    return a