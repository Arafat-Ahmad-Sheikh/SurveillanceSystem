import React, { useEffect, useRef, useState } from "react";

// Mock data for remote devices (replace with real data from backend later)
const mockRemoteDevices = [
    { id: "dev1", name: "Office Entrance", status: "online" },
    { id: "dev2", name: "Warehouse", status: "offline" },
    { id: "dev3", name: "Parking Lot", status: "online" },
];

function Live() {
    // --- Local Device Section ---
    const videoRef = useRef(null);
    const [devices, setDevices] = useState([]);
    const [selectedDeviceId, setSelectedDeviceId] = useState("");
    const [stream, setStream] = useState(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        async function getDevices() {
            try {
                await navigator.mediaDevices.getUserMedia({ video: true });
                const allDevices = await navigator.mediaDevices.enumerateDevices();
                const videoDevices = allDevices.filter(d => d.kind === "videoinput");
                setDevices(videoDevices);
                if (videoDevices.length > 0 && !selectedDeviceId) {
                    setSelectedDeviceId(videoDevices[0].deviceId);
                }
            } catch (err) {
                // Do nothing if denied
            }
        }
        getDevices();
        // eslint-disable-next-line
    }, [selectedDeviceId]);

    useEffect(() => {
        if (!selectedDeviceId || !playing) return;

        async function startStream() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            try {
                const newStream = await navigator.mediaDevices.getUserMedia({
                    video: { deviceId: { exact: selectedDeviceId } },
                    audio: false,
                });
                setStream(newStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = newStream;
                    videoRef.current.play();
                }
            } catch (err) {
                alert("Could not start video stream: " + err.message);
            }
        }
        startStream();

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
        // eslint-disable-next-line
    }, [selectedDeviceId, playing]);

    const handleStopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        }
        setPlaying(false);
    };

    const handleStartCamera = () => {
        setPlaying(true);
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    // --- Remote Devices Section ---
    const [selectedRemoteDevice, setSelectedRemoteDevice] = useState(null);

    return (
        <div className="flex flex-col items-center p-8 w-full">
            {/* Section 1: This Device */}
            <div className="w-full max-w-3xl mb-12">
                <h2 className="text-2xl font-bold mb-4">Live Feed: This Device</h2>
                <div className="mb-4">
                    <label className="mr-2 font-semibold">Select Camera:</label>
                    <select
                        className="select select-bordered"
                        value={selectedDeviceId}
                        onChange={e => setSelectedDeviceId(e.target.value)}
                        disabled={playing}
                    >
                        {devices.map((device, idx) => (
                            <option key={device.deviceId} value={device.deviceId}>
                                {device.label || `Camera ${idx + 1}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4 flex gap-2">
                    {!playing ? (
                        <button className="btn btn-success" onClick={handleStartCamera}>
                            Start Camera
                        </button>
                    ) : (
                        <button className="btn btn-error" onClick={handleStopCamera}>
                            Stop Camera
                        </button>
                    )}
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-base-100 p-4">
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-[640px] h-[360px] bg-black rounded"
                        style={{ background: "#000" }}
                    />
                </div>
                <div className="flex gap-2 mt-4">
                    <button className="btn btn-primary" onClick={handlePlay} disabled={!playing}>
                        Play
                    </button>
                    <button className="btn btn-warning" onClick={handlePause} disabled={!playing}>
                        Pause
                    </button>
                </div>
                <p className="mt-4 text-gray-500 text-center max-w-md">
                    This is a live preview from your selected camera on this device.
                </p>
            </div>

            {/* Section 2: Remote Devices */}
            <div className="w-full max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">Live Feeds: Your Connected Devices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockRemoteDevices.map(device => (
                        <div
                            key={device.id}
                            className="card bg-primary text-primary-content shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="card-body">
                                <h3 className="card-title">{device.name}</h3>
                                <p>
                                    Status:{" "}
                                    <span className={device.status === "online" ? "text-green-200" : "text-red-200"}>
                                        {device.status}
                                    </span>
                                </p>
                                <button
                                    className="btn btn-primary-content mt-2"
                                    disabled={device.status !== "online"}
                                    onClick={() => setSelectedRemoteDevice(device)}
                                >
                                    View Live
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show remote feed placeholder/modal */}
                {selectedRemoteDevice && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-base-100 p-8 rounded shadow-lg relative w-[700px]">
                            <button
                                className="absolute top-2 right-2 btn btn-sm btn-circle"
                                onClick={() => setSelectedRemoteDevice(null)}
                            >✕</button>
                            <h3 className="text-xl font-bold mb-4">
                                {selectedRemoteDevice.name} - Live Feed
                            </h3>
                            {/* In a real app, replace this with a video stream from the backend */}
                            <div className="flex items-center justify-center h-[360px] bg-black rounded">
                                <span className="text-white text-lg">
                                    [Live stream from "{selectedRemoteDevice.name}" would appear here]
                                </span>
                            </div>
                            <p className="mt-4 text-gray-500">
                                This is a placeholder. In production, this would show the actual live feed from the remote device.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Live;