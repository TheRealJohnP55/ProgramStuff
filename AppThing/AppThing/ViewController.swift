//
//  ViewController.swift
//  AppThing
//
//  Created by 054 06 Weaver, Camden J on 3/5/18.
//  Copyright © 2018 054 06 Weaver, Camden J. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet var LabelNo: UILabel!
    let thing = ["Contacting Satellites","Recieving Cell Tower Information","Testing connectivity","Pinging 8.8.8.8","Locating Nearby Asteroids","Taking a Break","Reading Weather Reports","Asking Social Media","Calculating Density of the Earth","Sending Rocket to Mars","Testing Teleportation Devices","Finishing Up","Concluding Data","Cleaning Up","Determining The Meaning Of Life","Creating Black Hole","Finding the Speed Limit","Seeing If You Are Still Alive","Eating Pie","TESTING CAPS LOCK","Giving You The Answer"]
    @IBAction func Check(_ sender: Any) {
        self.LabelNo.alpha = 1
        LabelNo.text = "No. The Earth still has a couple billion years left"
        Progress.progress = 0
        for p in 1...100 {
            sleep(1)
            Progress.progress += 1
            if(Progress.progress.truncatingRemainder(dividingBy: 5) == 1) {
                var a = Int(round(Double(p/5)))
                NSLog(String(a))
                Label1.text = thing[a]
            }
            self.LabelNo.alpha = 0
            self.Label1.text = ""
        }
        
    }
    @IBOutlet weak var Progress: UIProgressView!
    @IBOutlet weak var Label1: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        LabelNo.alpha = 1.0
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

