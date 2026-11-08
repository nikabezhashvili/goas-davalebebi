/*
1)
def change(st):
    a = "abcdefghijklmnopqrstuvwxyz"
    res = ""

    for i in a:
        if i in st.lower():
            res += "1"
        else:
            res += "0"

    return res


2)
def get_middle(s):
    a = len(s)
    b = a // 2
    if a % 2 == 0:
        return s[b-1:b+1]
    else:
        return s[b]


3)
def bumps(road):
    if road.count('n') <= 15:
        return "Woohoo!"
    else:
        return "Car Dead"

4)
def sequence_sum(begin_number, end_number, step):
    a = 0
    for i in range(begin_number, end_number+1, step):
        a+=i
    return a

5)
def number(a):
    b = []
    for i in range(len(a)):
        b.append(f"{i + 1}: {a[i]}")
    return b
*/