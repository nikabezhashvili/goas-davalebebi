# 1
def count_positives_sum_negatives(arr):
    if not arr:
        return []
    a = 0
    b = 0
    for i in arr:
        if i > 0:
            a +=1
        elif i < 0:
            b += i
    return [a,b]
# 2
def litres(time):
    return time // 2
# 3
def monkey_count(n):
    arr = []
    for i in range(1,n+1):
        arr.append(i)
    return arr
# 4
def double_integer(i):
    return i*2
# 5
def hero(bullets, dragons):
    if bullets >= 2*dragons:
        return True
    else:
        return False
    
# 6
def is_even(n): 
    if n % 2 == 0:
        return True
    else:
        return False