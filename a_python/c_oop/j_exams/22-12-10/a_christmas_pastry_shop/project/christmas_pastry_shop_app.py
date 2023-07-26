from project.delicacies.delicacy import Delicacy
from project.delicacies.gingerbread import Gingerbread
from project.delicacies.stolen import Stolen
from project.booths.booth import Booth
from project.booths.open_booth import OpenBooth
from project.booths.private_booth import PrivateBooth


class ChristmasPastryShopApp:


    def __init__(self):
        self.booths: list[Booth] = []
        self.delicacies: list[Delicacy] = []
        self.income: float = 0


    def add_delicacy(self, type_delicacy: str, name: str, price: float):
        if any(name == d.name for d in self.delicacies):
            raise Exception(f'{name} already exists!')

        delicacy = None
        if type_delicacy == 'Gingerbread':
            delicacy = Gingerbread(name, price)
        elif type_delicacy == 'Stolen':
            delicacy = Stolen(name, price)
        else:
            raise Exception(f'{type_delicacy} is not on our delicacy menu!')

        self.delicacies.append(delicacy)

        return f'Added delicacy {name} - {type_delicacy} to the pastry shop.'


    def add_booth(self, type_booth: str, booth_number: int, capacity: int):
        if any(booth_number == b.booth_number for b in self.booths):
            raise Exception(f'Booth number {booth_number} already exists!')

        booth = None
        if type_booth == 'Open Booth':
            booth = OpenBooth(booth_number, capacity)
        elif type_booth == 'Private Booth':
            booth = PrivateBooth(booth_number, capacity)
        else:
            raise Exception(f'{type_booth} is not a valid booth!')

        self.booths.append(booth)

        return f'Added booth number {booth_number} in the pastry shop.'


    def reserve_booth(self, number_of_people: int):
        for b in self.booths:
            if not b.is_reserved:
                if b.capacity >= number_of_people:
                    b.reserve(number_of_people)
                    return f'Booth {b.booth_number} has been reserved for {number_of_people} people.'

        raise Exception(f'No available booth for {number_of_people} people!')


    def order_delicacy(self, booth_number: int, delicacy_name: str):
        booth = next((b for b in self.booths if b.booth_number == booth_number), None)
        if not booth:
            raise Exception(f'Could not find booth {booth_number}!')

        delicacy = next((d for d in self.delicacies if d.name == delicacy_name), None)
        if not delicacy:
            raise Exception(f'No {delicacy_name} in the pastry shop!')

        booth.delicacy_orders.append(delicacy)

        return f'Booth {booth_number} ordered {delicacy_name}.'


    def leave_booth(self, booth_number: int):
        # booth number will always be valid
        booth = next(b for b in self.booths if b.booth_number == booth_number)

        bill = sum([o.price for o in booth.delicacy_orders]) + booth.price_for_reservation
        self.income += bill

        booth.free()

        return f'Booth {booth_number}:\n'\
            + f'Bill: {bill:.2f}lv.'


    def get_income(self):
        return f'Income: {self.income:.2f}lv.'

