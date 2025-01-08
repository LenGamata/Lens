def reserve_seat(self):
    """Allow the customer to choose a bus and view available seats."""
    self.display_buses()  # Show available buses
    
    try:
        bus_choice = int(input("Choose the bus to reserve (1-3): ")) - 1
        if bus_choice < 0 or bus_choice > 2:
            print("Invalid bus selection.")
            return
        
        bus_name = self.buses[bus_choice]["name"]
        print(f"\nAvailable Seats for {bus_name}:")
        
        # Display seat availability
        self.display_seats(bus_choice)
        
    except ValueError:
        print("Invalid input. Please select a valid bus number.")
