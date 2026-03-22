# 1
def find_it(a):
    for i in a:
        if a.count(i) % 2 != 0:
            return i
        
# 2
def summation(num):
    total = 0
    for i in range(1, num + 1):
        total += i
    return total


# 3

def rps(p1, p2):
    if p1 == p2:
        return 'Draw!'
    elif p1 == 'rock' and p2 == 'scissors':
        return 'Player 1 won!'
    elif p1 == 'scissors' and p2 == 'paper':
        return "Player 1 won!"
    elif p1 == 'paper' and p2 == 'rock':
        return  "Player 1 won!"
    else:
        return "Player 2 won!"
    
# 4
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

# 5
def cap_me(arr):
    a=[]
    for i in arr:
        a.append(i.capitalize())
    return a