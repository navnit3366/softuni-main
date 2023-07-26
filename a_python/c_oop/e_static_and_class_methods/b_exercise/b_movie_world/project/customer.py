from project.dvd import DVD

class Customer:

    def __init__(self, name: str, age: int, id_: int):
        self.name = name
        self.age = age
        self.id = id_
        self.rented_dvds = []

    def __repr__(self):
        dvd_names = [dvd.name for dvd in self.rented_dvds]
        return f'{self.id}: {self.name} of age {self.age} has {len(self.rented_dvds)} rented DVD\'s ({", ".join(dvd_names)})'

