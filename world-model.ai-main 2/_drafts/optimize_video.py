import os
import moviepy.editor as mp
import torchvision.transforms as transforms
import torch
import sys

script_name = sys.argv[0]
dir_path = sys.argv[1]
bitrate = sys.argv[2]
if not bitrate:
    bitrate = '100k'
if not dir_path:
    dir_path = 'gallery'
def resize_videos(directory, bitrate='100k'):
    # Define the transformation to resize the video frames
    transform = transforms.Compose([
        transforms.Resize((100, 160))
    ])

    # Loop through all files in the directory
    for filename in os.listdir(directory):
        if filename.endswith('.mp4'):
            # Load the video
            video_path = os.path.join(directory, filename)
            video = mp.VideoFileClip(video_path)

            if video.size[0] < 161:
                continue
            print(f"Resizing {filename} from {video.size}...")

            # Resize each frame using torchvision
            resized_frames = [transform(torch.from_numpy(frame).permute(2, 0, 1)).permute(1, 2, 0).numpy() for frame in video.iter_frames()]

            # Create a new video with the resized frames
            resized_video = mp.ImageSequenceClip(resized_frames, fps=video.fps)

            # Save the resized video with lower bitrate
            resized_video.write_videofile(filename, codec='libx264', bitrate=bitrate)

# Example usage
resize_videos(dir_path, bitrate=bitrate)
