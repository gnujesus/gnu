#include <cassert>
#include <iostream>

using namespace std;

class Node {
public:
  int Value;
  Node *Next;
};

class DoubleLinkNode {
public:
  DoubleLinkNode *Prev;
  int Value;
  DoubleLinkNode *Next;
};

class CircularLinkedList {

public:
  Node *head;
  CircularLinkedList() : head(nullptr) {}

  // Insert (Add)
  void add_front(int value) {
    Node *new_node = new Node{value, head};
    if (head == nullptr) {
      head = new_node;
      new_node->Next = head; // Auto referencia en lista vacía
    } else {
      Node *tail = head;
      while (tail->Next != head) {
        tail = tail->Next; // Encuentra el último nodo
      }
      tail->Next = new_node; // Enlaza el último al nuevo
      new_node->Next = head; // Completa el círculo
      head = new_node;       // Actualiza la cabeza
    }
  }

  void add_back(int value) {
    Node *new_node = new Node{value, head};
    if (head == nullptr) {
      head = new_node;
      new_node->Next = head;
    } else {
      Node *tail = head;
      while (tail->Next != head) {
        tail = tail->Next;
      }
      tail->Next = new_node;
      new_node->Next = head;
    }
  }

  void add_at_position(int value, int position) {
    if (position <= 0 || head == nullptr) {
      add_front(value);
      return;
    }

    Node *current = head;
    int count = 1; // Empiezas desde la posición 1
    while (current != nullptr && count < position) {
      current = current->Next;
      count++;
    }

    // Si llegaste al final o superaste la posición dada
    if (current == nullptr) {
      add_back(value);
      return;
    }

    Node *new_node = new Node{value, current->Next};
    current->Next = new_node;
  }

  // Remove (Delete)
  void remove_front() {
    if (head == nullptr)
      return;

    Node *temp = head;
    if (head->Next == head) { // Solo un nodo
      head = nullptr;
    } else {
      Node *tail = head;
      while (tail->Next != head) {
        tail = tail->Next;
      }
      tail->Next = head->Next; // Conecta el último con el segundo
      head = head->Next;
    }
    delete temp;
  }

  void remove_back() {
    if (head == nullptr)
      return;

    Node *tail = head;
    Node *prev = nullptr;

    while (tail->Next != head) {
      prev = tail;
      tail = tail->Next;
    }

    if (prev == nullptr) { // Un solo nodo
      head = nullptr;
    } else {
      prev->Next = head;
    }
    delete tail;
  }

  void remove_at_position(int position) {
    if (position <= 0 || head == nullptr)
      return;

    Node *current = head;
    Node *prev = nullptr;
    int count = 1;

    while (current != nullptr && count < position) {
      prev = current;
      current = current->Next;
      count++;
    }

    if (current == nullptr)
      return; // Posición fuera de la lista

    if (current == head) { // Elimina el primer nodo
      remove_front();
      return;
    }

    if (current->Next == head) { // Elimina el último nodo
      remove_back();
      return;
    }

    // Elimina un nodo intermedio
    prev->Next = current->Next;
    delete current;
  }

  // Clear
  void clear() {
    if (head == nullptr)
      return;

    Node *current = head;
    Node *Next;

    while (current != nullptr) {

      Next = current->Next;
      delete current;
      current = Next;

      if (current == head) { // Si solo quedaba un nodo, romper el ciclo
        break;
      }
    }
    head = nullptr; // La lista queda vacía
  }
};

class DoubleLinkedList {
public:
  DoubleLinkNode *head;
  DoubleLinkNode *tail;
  DoubleLinkedList() : head(nullptr), tail(nullptr) {}

  // Insert (Add)
  void add_front(int value) {
    DoubleLinkNode *new_node = new DoubleLinkNode{nullptr, value, head};
    if (head == nullptr) {
      tail = new_node;
    } else {
      head->Prev = new_node;
    }
    head = new_node;
  }

  void add_back(int value) {
    DoubleLinkNode *new_node = new DoubleLinkNode{tail, value, nullptr};
    if (tail == nullptr) {
      head = new_node;
    } else {
      tail->Next = new_node;
    }
    tail = new_node;
  }

  void add_at_position(int value, int position) {
    if (position <= 0 || head == nullptr) {
      add_front(value);
      return;
    }

    DoubleLinkNode *current = head;
    int count = 1; // Empiezas desde la posición 1
    while (current != nullptr && count < position) {
      current = current->Next;
      count++;
    }

    // Si llegaste al final o superaste la posición dada
    if (current == nullptr) {
      add_back(value);
      return;
    }

    DoubleLinkNode *new_node =
        new DoubleLinkNode{current->Prev, value, current};
    current->Prev->Next = new_node;
    current->Prev = new_node;
  }

  // Remove (Delete)
  void remove_front() {
    if (head == nullptr)
      return; // Lista vacía
    DoubleLinkNode *temp = head;
    head = head->Next;
    if (head != nullptr) {
      head->Prev = nullptr;
    } else {
      tail = nullptr; // La lista queda vacía
    }
    delete temp;
  }

  void remove_back() {
    if (tail == nullptr)
      return; // Lista vacía

    DoubleLinkNode *temp = tail;
    if (head == tail) { // Un solo nodo
      head = tail = nullptr;
    } else {
      tail = tail->Prev;
      tail->Next = nullptr;
    }
    delete temp;
  }

  void remove_at_position(int position) {
    if (position <= 0 || head == nullptr)
      return; // Posición inválida

    DoubleLinkNode *current = head;
    int count = 1;
    while (current != nullptr && count < position) {
      current = current->Next;
      count++;
    }

    if (current == nullptr)
      return; // Posición fuera de la lista

    if (current == head) { // Elimina el primer nodo
      remove_front();
      return;
    }

    if (current == tail) { // Elimina el último nodo
      remove_back();
      return;
    }

    // Elimina un nodo intermedio
    current->Prev->Next = current->Next;
    current->Next->Prev = current->Prev;
    delete current;
  }

  // Clear
  void clear() {
    while (head != nullptr) {
      DoubleLinkNode *temp = head;
      head = head->Next;
      delete temp;
    }
    tail = nullptr; // La lista queda vacía
  }
};

void print_list(Node *head) { // prints indefinitely if *head is a from a
                              // circular linked list
  while (head != NULL) {
    cout << head->Value << endl;
    head = head->Next;
  }
};

void print_double_linked_list(
    DoubleLinkNode *head) { // prints indefinitely if *head is a from a
                            // circular linked list

  cout << "Double Linked List (Double Lista Enlazada)" << endl << endl;

  while (head != NULL) {
    cout << "Valor Anterior: " << head->Prev << ", ";
    cout << "Valor Actual: " << head->Value << ", ";
    cout << "Valor Siguiente: " << head->Next << ", " << endl;
    head = head->Next;
  }
};

int main() {

  // *********************   PRUEBAS CircularLinkedList  *********************

  cout << "---------------------------" << endl;
  cout << "Pruebas Lista Circular" << endl;
  cout << "---------------------------" << endl;

  CircularLinkedList miListaCircular;

  // Prueba 1: Insertar y verificar
  cout << "Prueba 1: Insertar y verificar" << endl;
  miListaCircular.add_front(10);
  miListaCircular.add_back(20);
  assert(miListaCircular.head->Value == 10);
  assert(miListaCircular.head->Next->Value == 20);
  assert(miListaCircular.head->Next->Next == miListaCircular.head); // Circular
  cout << " - ¡Prueba superada!" << endl << endl;

  // Prueba 2: Eliminar y verificar
  cout << "Prueba 2: Eliminar y verificar" << endl;
  miListaCircular.remove_front();
  assert(miListaCircular.head->Value == 20);
  miListaCircular.remove_back();
  assert(miListaCircular.head == nullptr);
  cout << " - ¡Prueba superada!" << endl << endl;

  // Prueba 3: Limpiar la lista
  cout << "Prueba 3: Limpiar la lista" << endl;
  miListaCircular.add_back(5);
  miListaCircular.clear();
  assert(miListaCircular.head == nullptr);
  cout << " - ¡Prueba superada!" << endl << endl;

  // *********************   PRUEBAS DoubleLinkedList  *********************

  cout << "---------------------------" << endl;
  cout << "Pruebas Lista Doblemente Enlazada" << endl;
  cout << "---------------------------" << endl;

  DoubleLinkedList miListaDoble;

  // Prueba 4: Insertar y verificar
  cout << "Prueba 4: Insertar y verificar" << endl;
  miListaDoble.add_front(10);
  miListaDoble.add_back(20);
  miListaDoble.add_at_position(15, 2);
  assert(miListaDoble.head->Value == 10);
  assert(miListaDoble.head->Next->Value == 15);
  assert(miListaDoble.tail->Value == 20);
  cout << " - ¡Prueba superada!" << endl << endl;

  // Prueba 5: Eliminar y verificar
  cout << "Prueba 5: Eliminar y verificar" << endl;
  miListaDoble.remove_at_position(2);
  assert(miListaDoble.head->Next->Value == 20);
  assert(miListaDoble.tail->Prev->Value == 10);
  cout << " - ¡Prueba superada!" << endl << endl;

  // Prueba 6: Limpiar la lista
  cout << "Prueba 6: Limpiar la lista" << endl;
  miListaDoble.clear();
  assert(miListaDoble.head == nullptr && miListaDoble.tail == nullptr);
  cout << " - ¡Prueba superada!" << endl << endl;

  cout << "¡Todas las pruebas superadas exitosamente!" << endl;

  return 0;
}
