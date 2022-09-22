

const IntDemo = `\
print("Hello World!")\
`

const StringDemo = `\
a = "Hello"

print(a[0])\
`

const FunctionDemo = `\
def function():
    print("hello function")\
`

const DecoratorDemo = `\
def wrap():

    def inner():
        print("DecoratorDemo")

    return inner\
`

const MagicGetItemDemo = `\
import collections

Card = collections.namedtuple('Card', ['rank', 'suit'])

class FrenchDeck:

    ranks = [str(n) for n in range(2, 11)] + list('JQKA')
    suits = 'spades diamonds clubs hearts'.split()

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits for rank in self.ranks]

    def __len__(self):
        return len(self._cards)

    def __getitem__(self, position):
        return self._cards[position]


deck = FrenchDeck()

print(len(deck))
print(deck[5])\
`

const CollectionsDequeDemo = `\
from collections import deque

dq = deque(range(10), maxlen=10)
print(dq)

dq.appendleft(-1)
print(dq)

dq.extend([11, 22, 33])
print(dq)

dq.extendleft([10, 20, 30, 40])
print(dq)\
`

const CollectionsDequeRotateDemo = `\
from collections import deque

dq = deque(range(10), maxlen=10)
print(dq)

dq.rotate(3)
print(dq)

dq.rotate(-4)
print(dq)\
`

const CollectionsDequeAppendDemo = `\
from collections import deque

dq = deque(range(10), maxlen=10)
print(dq)

dq.appendleft(-1)
print(dq)

dq.append(-2)
print(dq)\
`

const CollectionsDequeExtendDemo = `\
from collections import deque

dq = deque(range(10), maxlen=10)
print(dq)

dq.extendleft(['a', 'b', 'c'])
print(dq)

dq.extend([1, 2, 3])
print(dq)\
`

const CollectionsDequePopDemo = `\
from collections import deque

dq = deque(range(10), maxlen=10)
print(dq)

dq.popleft()      # popleft 从队列左边出队
print(dq)

dq.pop()          # pop 从队列右边出队
print(dq)\
`

export default {
    IntDemo: IntDemo,
    StringDemo: StringDemo,
    FunctionDemo: FunctionDemo,
    DecoratorDemo: DecoratorDemo,
    MagicGetItemDemo: MagicGetItemDemo,

    CollectionsDequeDemo: CollectionsDequeDemo,
    CollectionsDequeRotateDemo: CollectionsDequeRotateDemo,
    CollectionsDequeAppendDemo: CollectionsDequeAppendDemo,
    CollectionsDequeExtendDemo: CollectionsDequeExtendDemo,
    CollectionsDequePopDemo: CollectionsDequePopDemo,

}