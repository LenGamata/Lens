def manage_seats(self, bus_number):
    """Allow Ticket Person to add or remove reservations for the selected bus."""
    while True:
        print(f"\nManaging {self.buses[bus_number]['name']}")
        self.display_bus(bus_number)  # Display current seat layout
        print("1. Add Reservation\n2. Remove Reservation\n3. Cancel")
        action_choice = input("Choose an action (1-3): ").strip()
        
        if action_choice == '1':
            # Placeholder for add reservation logic
            self.add_reservation(bus_number)
        elif action_choice == '2':
            # Placeholder for remove reservation logic
            self.remove_reservation(bus_number)
        elif action_choice == '3':
            print("Returning to previous menu.")
            return
        else:
            print("Invalid choice. Please select 1, 2, or 3.")
