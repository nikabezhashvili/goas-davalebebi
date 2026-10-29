/* 
1
def maskify(cc):
    a = cc[:-4]
    b = '#' * len(a)
    return b + cc[-4:]

2
def reverse_words(text):
    a = text.split(' ')
    b = []
    for i in a:
        c = i[::-1]
        b.append(c)
    return " ".join(b)

3
def to_jaden_case(string):
    a = string.split()
    b = ""
    c = True
    for i in a:
        if not c:
            b += " "
        b += i.capitalize()
        c = False
    return b

4
def multi_table(number):
    arr = ''
    for i in range(1,11):
        arr += f'{i} * {number} = {i*number}'
        if i < 10:
            arr += "\n"

    return arr

5
def cake_slice(n):
    return n * (n +1) //2 +1
*/