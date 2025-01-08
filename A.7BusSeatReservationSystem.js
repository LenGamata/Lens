def remove_reservation(self, bus_number):
    """Remove a reservation from an occupied seat on the selected bus."""
    while True:
        print(f"\nRemoving Reservation from {self.buses[bus_number]['name']}")
        self.display_bus(bus_number)
        try:
            row = int(input("Enter row number (1-5): ")) - 1
            col = int(input("Enter seat number (1-6): ")) - 1
            if 0 <= row < 5 and 0 <= col < 6:
                if self.buses[bus_number]["seats"][row][col] != "AVAILABLE":
                    print(f"Removing reservation for {self.buses[bus_number]['seats'][row][col]}")
                    self.buses[bus_number]["seats"][row][col] = "AVAILABLE"
                    print(f"Reservation for Seat {row + 1}-{col + 1} has been removed.")
                else:
                    print("This seat is not reserved.")
            else:
                print("Invalid seat selection. Please choose a valid row and seat number.")
        except ValueError:
            print("Invalid input. Please enter numeric values.")
        
        if input("Continue removing reservations? (yes/no): ").strip().lower() != 'yes':
            break
