// app/api/track/route.js - API endpoint for tracking
export async function POST(request) {
    try {
      const body = await request.json();
      const { event, properties, timestamp } = body;
      
      // Here you would typically save this to your database
      // For this example, we'll just log it
      console.log('Event tracked:', { event, properties, timestamp });
      
      // In a real app, you'd add this to your database:
      // await db.collection('events').insertOne({ event, properties, timestamp });
      
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error tracking event:', error);
      return new Response(JSON.stringify({ error: 'Failed to track event' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }