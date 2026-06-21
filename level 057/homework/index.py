# 1
def number(lines):
    a = []
    b = 1
    for i in lines:
        a.append(str(b)+': '+i)
        b+=1
    return a

# 2
def tower_builder(floors):
    a = []
    b = 2 * floors - 1
    for i in range(1, floors + 1):
        c = "*" * (2 * i - 1)
        a.append(c.center(b))
    return a

# 3
def find_outlier(integers):
    even = []
    odd = []
    for i in integers:
        if i % 2 == 0:
            even.append(i)
        else:
            odd.append(i)
    if len(even) == 1:
        return even[0]
    else:
        return odd[0]
    
# 4
def array_diff(a, b):
    b = set(b)
    c = []
    for i in a:
        if i not in b:
            c.append(i)
    return c

# 5
# არ აქვს პირობა