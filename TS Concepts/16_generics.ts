class DataStore<T> {
  private items: T[] = [];
  addItem(item: T): void {
    this.items.push(item);
  }
  getItem(index: number): T {
    return this.items[index];
  }
  removeItem(index: number): void {
    this.items.slice(index, 1);
  }
  getAllItems(): T[] {
    return this.items;
  }
}

const data1 = new DataStore<number>();
data1.addItem(1);
data1.addItem(2);

const data2 = new DataStore<string>();
data2.addItem("A");
data2.addItem("B");

interface User {
  id: number;
}

const data3 = new DataStore<User>();
data3.addItem({ id: 1 });
