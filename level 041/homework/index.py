# 1
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
    
# 2
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

# 3
def order(s):
    a = []
    for i in range(1,10):
        for b in list(s.split()):
            if str(i) in b:
                a.append(b)
    return " ".join(a)

# 4
def is_pangram(st):
    a = [
        'a','b','c','d','e','f','g','h','i','j','k','l','m',
         'n','o','p','q','r','s','t','u','v','w','x','y','z']
    st = st.lower()
    for i in a:
        if i not in st:
            return False
    return True

# 5
def alphabet_position(text):
    text = text.lower()
    a = []
    for i in text:
        if i.isalpha():
            a.append(str(ord(i) - 96))
    return " ".join(a)
