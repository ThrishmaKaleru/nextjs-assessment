
export async function GET() {
    return Response.json([
      { id: 1, title: "Post 1", name: "John", email: "john@example.com", phone: 1234567890 },
      { id: 2, title: "Post 2", name: "Jane", email: "jane@example.com", phone: 9876543210 }
    ]);
  }
  