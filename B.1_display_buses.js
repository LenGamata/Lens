def display_buses(self):
    """Display the list of buses and their destinations."""
    print("Available Buses:")
    buses = [("Bus to Cubao", "Cubao"),
             ("Bus to Baguio", "Baguio"),
             ("Bus to Pasay", "Pasay")]
    
    for i, (bus, destination) in enumerate(buses, start=1):
        print(f"{i}. {bus} (Destination: {destination})")
