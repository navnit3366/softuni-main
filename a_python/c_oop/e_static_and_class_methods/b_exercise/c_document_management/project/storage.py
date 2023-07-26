from project.category import Category
from project.topic import Topic
from project.document import Document

class Storage:

    def __init__(self):
        self.categories = []
        self.topics = []
        self.documents = []

    def add_category(self, category: Category):
        if category not in self.categories:
            self.categories.append(category)

    def add_topic(self, topic: Topic):
        if topic not in self.topics:
            self.topics.append(topic)

    def add_document(self, document: Document):
        if document not in self.documents:
            self.documents.append(document)

    def edit_category(self, category_id: int, new_name: str):
        category = self.get_category(category_id)
        category.edit(new_name)

    def edit_topic(self, topic_id: int, new_topic: str, new_storage_folder: str):
        topic = self.get_topic(topic_id)
        topic.edit(new_topic, new_storage_folder)

    def edit_document(self, document_id: int, new_file_name: str):
        document= self.get_document(document_id)
        document.edit(new_file_name)

    def delete_category(self, category_id):
        category = self.get_category(category_id)
        self.categories.remove(category)

    def delete_topic(self, topic_id):
        topic = self.get_topic(topic_id)
        self.topics.remove(topic)

    def delete_document(self, document_id):
        document = self.get_document(document_id)
        self.documents.remove(document)

    def get_category(self, category_id):
        category = None
        for c in self.categories:
            if c.id == category_id:
                category = c
                break
        return category

    def get_topic(self, topic_id):
        topic = None
        for t in self.topics:
            if t.id == topic_id:
                topic = t
                break
        return topic

    def get_document(self, document_id):
        document = None
        for d in self.documents:
            if d.id == document_id:
                document = d
                break
        return document

    def __repr__(self):
        NL = '\n'
        output = ''
        for d in self.documents:
            output += f'{d}' + NL
        return output.strip(NL)

