# 1
def make_negative(a):
    if a >=0:
        return -a
    else:
        return a
    
# 2
def switch_it_up(number):
    if number == 0:
        return 'Zero'
    elif number == 1:
        return 'One'
    elif number == 2:
        return 'Two'
    elif number == 3:
        return 'Three'
    elif number == 4:
        return 'Four'
    elif number == 5:
        return 'Five'
    elif number == 6:
        return 'Six'
    elif number == 7:
        return 'Seven'
    elif number == 8:
        return 'Eight'
    elif number == 9:
        return 'Nine'
    
# 3
def between(a,b):
    c = []
    for i in range(a,b+1):
        c.append(i)
    return c