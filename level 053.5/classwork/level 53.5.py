# 1)
def is_kiss(words):
    a = words.split()
    b = len(a)
    
    for i in a:
        if len(i) > b:
            return "Keep It Simple Stupid"
    
    return "Good work Joe!"