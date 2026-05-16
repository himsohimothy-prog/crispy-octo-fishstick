export const dynamic = 'force-dynamic';

let currentCommand = {
  action: "stop",
  target_ip: "",
  port: 53,
  mode: "udp",
  threads: 25,
  duration: 30,
  packet_size: 1024,
  target_mbps: 5.0,
  timestamp: Date.now()
};

export async function GET() {
  return Response.json(currentCommand);
}

export async function POST(request) {
  try {
    const body = await request.json();
    currentCommand = { ...body, timestamp: Date.now() };
    return Response.json({ status: "success" });
  } catch (error) {
    return Response.json({ status: "error" }, { status: 400 });
  }
}
