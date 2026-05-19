# 1
def accum(st):
    a = []
    for i, x in enumerate(st):
        a.append(x.upper() + x.lower() * i)
    return "-".join(a)

# 2
def define_suit(a):
    b = {
        'C': 'clubs',
        'D': 'diamonds',
        'H': 'hearts',
        'S': 'spades',
    }
    return b[a[-1]]
# 3
def player_rank_up(pts):
     if pts>=100:
        return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
     else:
        return False
# 4
def find_smallest_int(arr):
    return min(arr)
# 5
def is_kiss(words):
    a = words.split()
    b = len(a)
    
    for i in a:
        if len(i) > b:
            return "Keep It Simple Stupid"
    
    return "Good work Joe!"
# 6
def min_max(lst):
    min_n = min(lst)
    max_n = max (lst)
    return [min_n , max_n]